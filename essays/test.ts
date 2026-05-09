
type UhData = {
fiscalYear: number;
campus: string;
cip: number;
cipDesc: string;
group1: string;
group2: string;
group3: string;
group4: string;
group5: string;
outcome: string;
hawaiianLegacy: string;
awards: number;
};

const testData: UhData[] =  [
  {fiscalYear: 2023, campus: "UH Hilo", cip: 90101, cipDesc: "Speech Communicatn & Rhetoric", group1: "College of Arts & Sciences", group2: "Arts & Humanities", group3: "Communication", group4: "Communication", group5: "", outcome: "Bachelor's Degrees", hawaiianLegacy: "HAWAIIAN", awards: 16},
  {fiscalYear: 2023, campus: "UH Manoa", cip: 130301, cipDesc: "Curriculum & Instruction", group1: "College of Education", group2: "Education", group3: "Curriculum Studies", group4: "Curriculum Studies", group5: "", outcome: "Master's Degrees",
    hawaiianLegacy: "HAWAIIAN", awards: 20},
  {fiscalYear: 2023, campus: "UH Manoa", cip: 140801, cipDesc: "Civil Engineering", group1: "College of Engineering", group2: "Engineering", group3: "Civil Engineering", group4: "", group5: "", outcome: "Master's Degrees", hawaiianLegacy: "", awards: 16},
];

function totalDegrees(data: UhData[]): number {
  return data.reduce((total, item) => total + item.awards, 0);
}