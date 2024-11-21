(function (userName) {
    const userInfoDiv = document.getElementById('user-info');

    const userDiv = document.createElement('div');
    userDiv.classList.add('user-info');

    const profilePic = document.createElement('img');
    profilePic.src = './image/20240707_133621.jpg';
    profilePic.alt = `${userName}'s profile picture`;

    const userNameText = document.createTextNode(userName);

    userDiv.appendChild(profilePic);
    userDiv.appendChild(userNameText);

    userInfoDiv.appendChild(userDiv);
})('John');