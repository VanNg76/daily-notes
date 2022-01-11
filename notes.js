const notes = [
    {
        id: 1,
        subject: "html",
        date: "1/5/2022",
        feeling: "good",
        timeSpent: 4
    },
    {
        id: 2,
        subject: "css",
        date: "1/6/2022",
        feeling: "ok",
        timeSpent: 8
    }
]

const noteAboutToday = {
    id: 3,
    subject: "git-github",
    date: "1/10/2022",
    feeling: "hard",
    timeSpent: 8
}

console.log(notes);

notes.push(noteAboutToday);

console.log(notes);


for (const note of notes) {
    console.log(`Note ${note.id}
    ${note.date}
    I learned ${note.subject}.
    I spent ${note.timeSpent} hours working on it.
    I felt ${note.feeling}.
    -----------`);
}

const searchTerm = "good";

let findFeeling = false;

for (const note of notes) {
    if (searchTerm == note.feeling) {
        findFeeling = true;
    }
}

console.log(findFeeling);
