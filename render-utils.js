export function renderPolls(poll){

    const pollEl = document.createElement('div');
    const pastQuestion = document.createElement('h3');
    const pastOption1 = document.createElement('p');
    const pastOption2 = document.createElement('p');

    pollEl.classList.add('poll-item');

    pastQuestion.textContent = poll.question;
    pastOption1.textContent = `${poll.option_1}: ${poll.votes_1}`;
    pastOption2.textContent = `${poll.option_2}: ${poll.votes_2}`;

    pollEl.append(pastQuestion, pastOption1, pastOption2);

    return pollEl;


}