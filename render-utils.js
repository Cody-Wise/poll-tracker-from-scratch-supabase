export function renderPolls(poll){

    const pollEl = document.createElement('div');
    const pastQuestion = document.createElement('h3');
    const pastOption1 = document.createElement('p');
    const pastOption2 = document.createElement('p');

    pastQuestion.textContent = poll.question;
    pastOption1.textContent = `${poll.option1}: ${poll.vote1}`;
    pastOption2.textContent = `${poll.option2}: ${poll.vote2}`;

    pollEl.append(pastQuestion, pastOption1, pastOption2);

    return pollEl;


}