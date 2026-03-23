// Shared Supabase configuration for client pages (anon key; RLS must be enabled in Supabase).
window.YM_SUPABASE_CONFIG = {
  url: 'https://qbrdfnhksqoaagstvdzk.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicmRmbmhrc3FvYWFnc3R2ZHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODc5NDcsImV4cCI6MjA4ODM2Mzk0N30.GHhXkO63AMUrRSUHW9GtjD27AjBDZ1PIsfeBWRgNqgQ'
};

// Feature flags to toggle UI behaviour without code edits.
window.YM_FEATURE_FLAGS = Object.assign({ bookingsDisabled: true }, window.YM_FEATURE_FLAGS || {});
