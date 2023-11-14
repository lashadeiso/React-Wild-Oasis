import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vhldrvdprajesatqdbcd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZobGRydmRwcmFqZXNhdHFkYmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3NzY5NjQsImV4cCI6MjAxNTM1Mjk2NH0.IGa8yaot34gCzlNvKjqe0oMJr83SVaMe1H3Y9qrR_YI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
