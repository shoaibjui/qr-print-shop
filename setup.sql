-- QR Print Shop: run once in Supabase SQL Editor
-- 1) Ensure all fields exist
alter table public.orders
  add column if not exists customer_name text,
  add column if not exists phone text,
  add column if not exists file_path text,
  add column if not exists paper_size text,
  add column if not exists print_type text,
  add column if not exists pages integer,
  add column if not exists copies integer default 1,
  add column if not exists payment_method text,
  add column if not exists transaction_id text,
  add column if not exists receipt_path text,
  add column if not exists amount numeric(10,2),
  add column if not exists status text default 'pending',
  add column if not exists created_at timestamptz default now();

alter table public.orders enable row level security;

-- Public customer can submit an order, but cannot read or change orders.
drop policy if exists "Allow public order submissions" on public.orders;
create policy "Allow public order submissions"
on public.orders for insert to anon
with check (
  status = 'pending'
  and amount > 0
  and pages between 1 and 500
  and copies between 1 and 100
);

-- Admin access: turn OFF public sign-ups in Supabase Auth settings.
-- Create only the shop owner's user in Authentication > Users.
drop policy if exists "Owner can read orders" on public.orders;
create policy "Owner can read orders"
on public.orders for select to authenticated using (true);
drop policy if exists "Owner can update orders" on public.orders;
create policy "Owner can update orders"
on public.orders for update to authenticated using (true) with check (true);

-- Private bucket policies. Public customers may upload but cannot list/read files.
drop policy if exists "Customer upload print files" on storage.objects;
create policy "Customer upload print files"
on storage.objects for insert to anon
with check (bucket_id = 'print-files');

drop policy if exists "Owner can read print files" on storage.objects;
create policy "Owner can read print files"
on storage.objects for select to authenticated
using (bucket_id = 'print-files');
