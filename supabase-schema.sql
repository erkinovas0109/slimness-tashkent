-- Booking / lead requests submitted from the website form.
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  service text,
  comment text,
  lang text,
  status text not null default 'new' -- new | contacted | booked | cancelled
);

alter table public.bookings enable row level security;

-- New projects don't always pre-grant schema usage to anon; without it,
-- PostgREST rejects inserts with a misleading RLS-violation error.
grant usage on schema public to anon;
grant insert on public.bookings to anon;

-- Allow the public anon key to INSERT new leads only (no read/update/delete).
create policy "anon can insert bookings"
  on public.bookings
  for insert
  to anon
  with check (true);

-- Reads/updates should go through an authenticated admin role (e.g. Supabase Studio
-- or a separate admin panel), not the public anon key used by the website.
