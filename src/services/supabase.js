import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://grlezcwmwtzdthajuznb.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybGV6Y3dtd3R6ZHRoYWp1em5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NTcyNTAsImV4cCI6MjA0MDIzMzI1MH0.8IvAkZaQiTQncqt3bn_722_xVQuXNanrJ_-rkJBWTCI`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
