# Supabase message inbox setup

1. Create a Supabase project at [supabase.com/dashboard](https://supabase.com/dashboard). Choose the Free plan and a project name, database password, and region.
2. In the project, open **SQL Editor**, choose **New query**, paste the contents of `supabase/messages.sql`, and click **Run**.
3. Open **Project Settings → API**. Copy the **Project URL** and the **service_role** key (sometimes shown as a secret key).
4. For local development, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to those values. Do not commit `.env.local` or expose the secret key in client-side code.
5. In Vercel, open the portfolio project, then **Settings → Environment Variables**. Add the same two variables for Production (and Preview if desired), then redeploy.
6. Submit a test message on the deployed site. In Supabase, open **Table Editor → messages** to see it.

The message table is private to the server key. Public visitors can only submit through the validated `/api/messages` endpoint. Email or push notifications are not configured by this inbox setup.
