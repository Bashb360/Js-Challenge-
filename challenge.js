const latestCommitTimestamp = Date.now();
const reviews = [
    { userId: "user1", timestamp: Date.now() - 1000, reviewType: "APPROVAL" },
    { userId: "user2", timestamp: Date.now() + 10, reviewType: "COMMENT" },
    { userId: "user1", timestamp: Date.now() + 10, reviewType: "APPROVAL" },
    { userId: "user2", timestamp: Date.now() + 20, reviewType: "COMMENT" },
    { userId: "user1", timestamp: Date.now() + 30, reviewType: "APPROVAL" },
    { userId: "user3", timestamp: Date.now() + 35, reviewType: "APPROVAL" },
];

function checkPullRequestApproval(latestCommitTimestamp, reviews) {
    const approvedReviewsArray = reviews.filter(
        (review) =>
            review.reviewType === "APPROVAL" &&
            review.timestamp >= latestCommitTimestamp
    );
    const uniqueUsers = [];
    for (let review of approvedReviewsArray) {
        if (!uniqueUsers.includes(review.userId)) {
            uniqueUsers.push(review.userId);
            if (uniqueUsers.length >= 2) {
                return true;
            }
        }
    }
    return false;
}

const result = checkPullRequestApproval(latestCommitTimestamp, reviews);
console.log(result);