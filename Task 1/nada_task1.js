function getGrade( grade){
if (grade<=100 && grade>=90) return 'A';
else if (grade>=80 && grade<=89) return 'B';
else if (grade>=70 && grade<=79) return 'C';
else if (grade>=60 && grade<=69) return 'D';
else if (grade <60) return 'F';
else return 'Invalid grade';


}
console.log(getGrade(95)); 
console.log(getGrade(82)); 
console.log(getGrade(45)); 