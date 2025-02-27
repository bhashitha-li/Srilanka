const teamMembers = {
    
    member4: {
        name: "Bhashitha Chanul",
        role: "Web Developer",
        description: "Bhashitha is the mastermind behind our website. With a passion for coding and design, he brings our vision to life through his technical expertise."
    }
};

function showModal(memberId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const member = teamMembers[memberId];

    modalBody.innerHTML = `
        <h2>${member.name}</h2>
        <p><strong>${member.role}</strong></p>
        <p>${member.description}</p>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};