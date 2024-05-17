const group1 = [
    "Factorial of a number in C++.",
    "1d arrays in C++",
    "To demonstrate all Operators in Java",
    "To take input from User in C++ and Java.",
    "Function Overloading in C++",
    "Friend Function in C++",
    "Single inheritance in C++ and Java",
    "Usage of 'virtual' keyword in C++",
    "Usage of Math class in Java",
    "Exception handling in Java"
];

const group2 = [
    "Call by reference in C++",
    "To create Classes and Objects in C++ and Java.",
    "Constructor overloading in C++ and Java",
    "Method Overloading in Java.",
    "Usage of 'final' keyword in Java",
    "Abstract class in Java",
    "Interfaces in Java",
    "Userdefined Exceptions in Java",
    "Thread using Thread classes in Java",
    "Thread using Runnable Interface in Java"
];

function generateRandomQuestions() {
    const group1List = document.getElementById('group1-list');
    const group2List = document.getElementById('group2-list');

    // Clear previous questions
    group1List.innerHTML = '';
    group2List.innerHTML = '';

    // Get random questions from each group
    const randomGroup1 = getRandomQuestions(group1, 1);
    const randomGroup2 = getRandomQuestions(group2, 1);

    // Display questions for group 1
    randomGroup1.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        group1List.appendChild(li);
    });

    // Display questions for group 2
    randomGroup2.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        group2List.appendChild(li);
    });
}

function getRandomQuestions(group, num) {
    const shuffled = group.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

// Generate random questions when the page loads
window.onload = generateRandomQuestions;
