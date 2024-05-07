function nestedComment() {
    const commentData = [];
    let commentCount = 0;

    return function() {
        const commentVal = document.getElementById('inputComment').value;
        console.log(commentVal);
        commentCount = commentCount + 1;
        const comment = {
            id: commentCount,
            user: 'Hello' + commentCount,
            value: commentVal,
            children: []
        }
        commentData.push(comment);
        console.log(commentData);

        if(commentData.length === 1) {
            const commentBox = document.getElementById('commentBox');
            const commentContent = document.getElementById('commentContent');
            commentContent.innerHTML = commentVal;
            commentBox.style.visibility = 'visible';
            
        } else {
            const commentBox2 = document.getElementById('commentBox2');
            let comment2 = commentBox.cloneNode(true);
            comment2.children.commentContent.innerHTML = commentVal
            commentBox2.appendChild(comment2);
            commentBox2.children.commentContent.id = "commentContent2"
        }

        commentData.forEach((item) => {
            
        });
    }
}
const addComment = nestedComment();



