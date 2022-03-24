const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZ2JtZGt2cWJ2bGlhZXJndWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc2Mzg2NTUsImV4cCI6MTk2MzIxNDY1NX0.VyU9_hrFWQ13GXnm_YwMxhGCqRVI1VMlopV5PCqYqYI';


const SUPABASE_URL = 'https://afgbmdkvqbvliaergujk.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(somePastPoll){

    const response = await client

        .from('poll_tracker')
        .insert(somePastPoll);

    return response.body;
}

export async function getPolls(){

    const response = await client

        .from('poll_tracker')
        .select('*');

    return response.body;

}

export async function signUp(someEmail, somePassword){

    const response = await client.auth.signUp({
        email: someEmail,
        password: somePassword,
    });

    return response.body;


}

export async function signIn(someEmail, somePassword){

    const response = await client.auth.signIn({
        email: someEmail,
        password: somePassword,
    });

    return response.body;

}

export async function getUser(){

    const user = client.auth.user();

    return user;
}

export async function signOut(){

    await client.auth.signOut();
}

export async function redirectIfNotLoggedIn(){

    const user = getUser();

    if (!user){
        window.location.href = '../';
    }
}

