const students = [
  { name: 'Hellen', test1: 9.4, test2: 8.6 },
  { name: 'Beltrano', test1: 4.4, test2: 4.8 },
  { name: 'Ciclano', test1: 7.6, test2: 8 }
]

const calculateTestAverageStudents = (student) => {
  return resultMedia = (student.test1 + student.test2) / 2;
}

const successApproval = (student) => {
  const media = calculateTestAverageStudents(student);
  if (media >= 7) {
    alert(`${student.name} passed with average ${media.toFixed(2)}`);
  } else {
    alert(`${student.name} failed with an average ${media.toFixed(2)}`);
  }
}

for (const student of students) {
  successApproval(student);
}

 