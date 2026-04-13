import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://lnoyrumbqkqwqhpfedsv.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjI5MjU0ZDRlLTc2MGUtNDM1Yy1iYmFhLWQ0ZGU4MTNmZWI3NSJ9.eyJwcm9qZWN0SWQiOiJsbm95cnVtYnFrcXdxaHBmZWRzdiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc1OTkzNTI0LCJleHAiOjIwOTEzNTM1MjQsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.ZBLI57V87J53kgDK54s6m1NMa0erYYHGr6A4YqK1Wrc';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };