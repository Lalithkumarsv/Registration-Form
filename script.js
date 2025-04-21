document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const course = document.getElementById("course").value;
    const age = document.getElementById("age").value;
  
    if (!name || !email || !gender || !course || !age) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    alert(`Form Submitted!\n\nName: ${name}\nEmail: ${email}\nGender: ${gender}\nCourse: ${course}\nAge: ${age}`);
    
    this.reset();
  });
  