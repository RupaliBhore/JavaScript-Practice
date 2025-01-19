const commentsContainer = document.getElementById('comments-container');
const newCommentInput = document.getElementById('new-comment-input');
const usernameInput = document.getElementById('username-input');
const commentCharCounter = document.getElementById('comment-char-counter');
const addCommentBtn = document.getElementById('add-comment-btn');
const resetBtn = document.getElementById('reset-btn');

const randomAvatars = [
  'Images/img1.avif',
  'Images/img2.png',
  'Images/img3.jfif',
  'Images/img4.png',
  'Images/img5.png',
  'Images/img6.jfif',
  'Images/img7.png'
];

const defaultComments = [
  { text: 'This is a great post! 😊', id: 'default-comment-1', user: { name: 'Alice', avatar: randomAvatars[0] } },
  { text: 'I completely agree with you! 👍', id: 'default-comment-2', user: { name: 'Bob', avatar: randomAvatars[1] } }
];
const maxLength = 250;
newCommentInput.addEventListener('input', () => {
  const currentLength = newCommentInput.value.length;
  const remaining = maxLength - currentLength;
  commentCharCounter.textContent = `${remaining} characters left`;

  if (currentLength >= maxLength) {
    newCommentInput.value = newCommentInput.value.substring(0, maxLength);  
  }

  if (remaining <= 50) {
    commentCharCounter.classList.add('warning');
    commentCharCounter.classList.remove('danger');
  } else if (remaining <= 20) {
    commentCharCounter.classList.add('danger');
    commentCharCounter.classList.remove('warning');
  } else {
    commentCharCounter.classList.remove('warning', 'danger');
  }
});

addCommentBtn.addEventListener('click', () => {
  const commentText = newCommentInput.value.trim();
  const username = usernameInput.value.trim();

  if (!username) {
    alert('Please enter your username.');
    return;
  }

  if (commentText) {
    const randomAvatar = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
    const newComment = createCommentElement(commentText, '', { name: username, avatar: randomAvatar });
    commentsContainer.appendChild(newComment);
    newCommentInput.value = ''; 
    usernameInput.value = ''; 
  }
});

resetBtn.addEventListener('click', () => {
  commentsContainer.innerHTML = '';
  defaultComments.forEach(comment => {
    const defaultComment = createCommentElement(comment.text, comment.id, comment.user);
    commentsContainer.appendChild(defaultComment);
  });
});

function createCommentElement(text, id = '', user) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  if (id) commentDiv.id = id;

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('comment-header');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('avatar');
  avatarImg.src = user.avatar;

  const usernameSpan = document.createElement('span');
  usernameSpan.classList.add('username');
  usernameSpan.textContent = user.name;

  headerDiv.appendChild(avatarImg);
  headerDiv.appendChild(usernameSpan);

  const commentText = document.createElement('p');
  commentText.classList.add('comment-text');
  commentText.textContent = text;

  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'Edit';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'Delete';

  const replyButton = document.createElement('button');
  replyButton.classList.add('reply-btn');
  replyButton.textContent = 'Reply';

  const repliesContainer = document.createElement('div');
  repliesContainer.classList.add('replies');

  editButton.addEventListener('click', () => {
    const newText = prompt('Edit your comment:', commentText.textContent);
    if (newText !== null) {
      commentText.textContent = newText;
    }
  });

  deleteButton.addEventListener('click', () => {
    commentsContainer.removeChild(commentDiv);
  });

  replyButton.addEventListener('click', () => {
    const replyInput = document.createElement('textarea');
    replyInput.placeholder = 'Write your reply...';

    const submitReplyBtn = document.createElement('button');
    submitReplyBtn.textContent = 'Submit';

    submitReplyBtn.addEventListener('click', () => {
      const replyText = replyInput.value.trim();
      if (replyText) {
        const replyDiv = document.createElement('div');
        replyDiv.classList.add('reply');
        replyDiv.textContent = replyText;
        repliesContainer.appendChild(replyDiv);
        replyInput.remove();
        submitReplyBtn.remove();
      }
    });

    repliesContainer.appendChild(replyInput);
    repliesContainer.appendChild(submitReplyBtn);
  });

  commentDiv.appendChild(headerDiv);
  commentDiv.appendChild(commentText);
  commentDiv.appendChild(editButton);
  commentDiv.appendChild(deleteButton);
  commentDiv.appendChild(replyButton);
  commentDiv.appendChild(repliesContainer);

  return commentDiv;
}
resetBtn.click();