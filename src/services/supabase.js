import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oebmktubzneklvssmrup.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lYm1rdHViem5la2x2c3NtcnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MzE0ODcsImV4cCI6MjA3MTUwNzQ4N30.BBVfmC0tzlUc78cMNe5isQu2lq-Rqxf_3eF2myE3iEo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
