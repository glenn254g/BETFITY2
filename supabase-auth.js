// Connect Supabase
const supabaseUrl = "https://curktrkcwobraducbkzj.supabase.co";
const supabaseKey = "sb_publishable_tTjEWEJtcNYqK95wamq3cw_nkLdW-A2";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// REGISTER USER
async function registerUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const { user, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        alert("❌ Error: " + error.message);
    } else {
        alert("✅ Registration successful. Check your email!");
    }
}

// LOGIN USER
async function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert("❌ Login failed: " + error.message);
    } else {
        alert("✅ Login successful!");
        window.location.href = "dashboard.html"; // change to your homepage
    }
}
