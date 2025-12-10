// Supabase client connection
const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseKey = "YOUR_ANON_PUBLIC_KEY";

window.supabase = supabase.createClient(supabaseUrl, supabaseKey);
