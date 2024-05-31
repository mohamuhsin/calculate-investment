import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Year</th>
                </tr>
            </thead>
        </table>
    );
}
