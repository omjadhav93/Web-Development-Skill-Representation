// Running Counter Effect for showcasing client business achievements.
// Adjusts speed based on target number and triggers when in view using IntersectionObserver.

const runnerFunction = () => {
    let achievements = document.querySelectorAll('.achieve-num');
    let achieveTarget = [];
    let greaterIndex = -1;
    achievements.forEach((num) => {
        greaterIndex = Math.max(greaterIndex, Number(num.textContent));
        achieveTarget.push(Number(num.textContent));
        num.innerHTML = 0;
    });
    let check = false;
    let numRunner = setInterval(() => {
        achievements.forEach((num, i) => {
            let currVal = Number(num.textContent) + 1;
            if (achieveTarget[i] > 50000) {
                currVal += 999; // Faster increment for large numbers
            } else if (achieveTarget[i] > 500) {
                currVal += 99; // Moderate increment for mid-range numbers
            }
            if (currVal <= achieveTarget[i]) {
                num.innerHTML = currVal;
            } else if (greaterIndex == i) {
                check = true;
            }
        });
        if (check) clearInterval(numRunner); // Stop when all counters reach their target
    }, 30);
};

const observer = new IntersectionObserver(el => {
    if (el[0].isIntersecting) {
        runnerFunction();
    }
});

const achieveList = document.getElementById('achieve-list');
observer.observe(achieveList);
