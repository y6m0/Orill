// إنشاء النقاط البيضاء خلف Neon
const dotsContainer = document.querySelector('.dots');
for(let i=0; i<200; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.animationDuration = (5 + Math.random() * 10) + 's';
    dotsContainer.appendChild(dot);
}

// إرسال البريد الإلكتروني
const sendButton = document.querySelector('.send-button');
sendButton.addEventListener('click', () => {
    const details = document.querySelector('.input-large').value;
    const userEmail = document.querySelector('.input-small').value;

    if(details.trim() === "" || userEmail.trim() === ""){
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    const subject = encodeURIComponent("تفاصيل إعلان جديد");
    const body = encodeURIComponent("البريد الإلكتروني للمرسل: " + userEmail + "\n\nالتفاصيل:\n" + details);

    // البريد النهائي الذي يستقبل كل الرسائل
    window.location.href = `mailto:oot6939@gmail.com?subject=${subject}&body=${body}`;
});
