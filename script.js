function calculateExponent() {
    const base = document.getElementById("base").value;
    const exponent = document.getElementById("exponent").value;
    const result = Math.pow(base, exponent);

    document.getElementById("result").innerHTML = base + " ยกกำลัง " + exponent + " = " + result;
}
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exponent Properties</title>
</head>
<body>
    <h1>การคำนวณเลขชี้กำลัง</h1>

    <label for="base">ฐาน:</label>
    <input type="number" id="base" placeholder="ใส่ฐาน" />

    <label for="exponent1">เลขชี้กำลังที่ 1:</label>
    <input type="number" id="exponent1" placeholder="ใส่เลขชี้กำลังที่ 1" />

    <label for="exponent2">เลขชี้กำลังที่ 2:</label>
    <input type="number" id="exponent2" placeholder="ใส่เลขชี้กำลังที่ 2" />

    <button onclick="calculateExponent()">คำนวณ</button>

    <p id="result"></p>

    <script>
        function exponent_properties(a, m, n) {
            let product = Math.pow(a, m) * Math.pow(a, n);
            let division = Math.pow(a, m) / Math.pow(a, n);
            let power_of_power = Math.pow(Math.pow(a, m), n);
            let zero_exponent = Math.pow(a, 0);
            let negative_exponent = 1 / Math.pow(a, n);
            let combined = (Math.pow(a, m) * Math.pow(a, -n)) / Math.pow(a, n);

            return `
                ผลคูณ: ${product}<br>
                ผลหาร: ${division}<br>
                ยกกำลังของยกกำลัง: ${power_of_power}<br>
                เลขชี้กำลังศูนย์: ${zero_exponent}<br>
                เลขชี้กำลังลบ: ${negative_exponent}<br>
                รวมกฎต่าง ๆ: ${combined}
            `;
        }

        function calculateExponent() {
            let a = document.getElementById('base').value;
            let m = document.getElementById('exponent1').value;
            let n = document.getElementById('exponent2').value;

            let result = exponent_properties(Number(a), Number(m), Number(n));
            document.getElementById('result').innerHTML = result;
        }
    </script>
</body>
</html>
