// انتظر تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const totalSalaries = document.getElementById('totalSalaries');
    
    // دالة لإنشاء أيام الأسبوع
    function createDays() {
        const daysContainer = document.getElementById('daysContainer');
        const daysOfWeek = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

        daysOfWeek.forEach((day, index) => {
            const dayButton = document.createElement('button');
            dayButton.textContent = `${day} (${new Date().toLocaleDateString('ar-IQ', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })})`;
            dayButton.onclick = function() {
                alert(`قائمة الموظفين لليوم: ${day}`);
                // يمكن إضافة منطق هنا لعرض الموظفين المرتبطين بهذا اليوم
            };
            daysContainer.appendChild(dayButton);
        });
    }

    // إنشاء أيام الأسبوع عند تحميل الصفحة
    createDays();

    // متغير لحفظ مجموع الرواتب
    let totalSalary = 0;

    // عندما يتم إرسال النموذج
    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        // استرجاع القيم من النموذج
        const name = document.getElementById('name').value;
        const attendance = document.getElementById('attendance').value;
        const dailySalary = parseFloat(document.getElementById('dailySalary').value);
        const notes = document.getElementById('notes').value;

        // إضافة الراتب اليومي إلى المجموع
        totalSalary += dailySalary;

        // إنشاء صف جديد
        const newRow = employeeTable.insertRow();

        // إضافة الخلايا إلى الصف
        const nameCell = newRow.insertCell(0);
        nameCell.textContent = name;

        const attendanceCell = newRow.insertCell(1);
        attendanceCell.textContent = attendance;

        const dailySalaryCell = newRow.insertCell(2);
        dailySalaryCell.textContent = dailySalary;

        const notesCell = newRow.insertCell(3);
        notesCell.textContent = notes;

        const actionsCell = newRow.insertCell(4);
        const editButton = document.createElement('button');
        editButton.textContent = 'تعديل';
        actionsCell.appendChild(editButton);

        // تحديث المجموع الكلي للرواتب
        totalSalaries.textContent = totalSalary;

        // إعادة تعيين النموذج بعد الإضافة
        employeeForm.reset();
    });
});
