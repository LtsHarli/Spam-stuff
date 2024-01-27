// as always this is for educational reasons
// this is for the console of your web browser 
// also if you send 1000+ it might crash a server if that all go through at once



//the site you want between the '' eg https://abc.com/review/(the stuff thats getting sent to the api/other (get this by sending a messege opening the log and clicking on wahat was sent))
const commentUrl = ''; 

async function submitComment(comment, postId, parentId) {
  const commentData = {
    'comment': comment,
    'submit': 'Submit',
    'comment_post_ID': postId,
    'comment_parent': parentId,
  };

  try {
    const response = await fetch(commentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(commentData),
    });

    const responseData = await response.text();
    console.log(responseData);
  } catch (error) {
    console.error('Error during comment submission:', error);
  }
}

// You will need to change this // go into the payload  and see whats there and put  const (name of const) = (what you want); 
//examples below
const comment = 'test';
const postId = 0; //
const parentId = 0;

for (let i = 1; i <= 5; i++) { //5 being the ammount of reviews you want to leave
  console.log(`Submitting comment ${i}`);
  submitComment(comment, postId, parentId);
}
