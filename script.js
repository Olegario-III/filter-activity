const students = [
      { name: "Jacob", score: 80 },
      { name: "Jovan", score: 60 },
      { name: "Alaiza", score: 75 },
      { name: "Anna", score: 90 },
      { name: "Maureen", score: 68 }
    ];
    const passed = students.filter(student=> student.score >= 75);
    const failed = students.filter(student=> student.score < 75);
    document.getElementById('result-passed').innerHTML = passed.map(student=>`${student.name} has passed with score ${student.score}`).join('<br>');
    document.getElementById('result-failed').innerHTML = failed.map(student=>`${student.name} has failed with score ${student.score}`).join('<br>');
    