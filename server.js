const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// بيانات الإصدارات
const versions = [
    { version: "1.0.0", changelog: "الإصدار الأول مع الميزات الأساسية." },
    { version: "1.1.0", changelog: "إضافة ميزة التوثيق وحل بعض المشاكل البسيطة." },
    { version: "1.2.0", changelog: "تحسين الأداء وتعديل بعض عناصر الواجهة." },
    { version: "2.0.0", changelog: "إعادة تصميم كاملة وإضافة وظائف جديدة." }
];

// نقطة النهاية لجلب الإصدارات
app.get('/api/versions', (req, res) => {
    res.json({ results: versions });
});

// تشغيل الخادم على المنفذ المحدد
app.listen(port, () => {
    console.log(`API تعمل الآن على: http://localhost:${port}`);
});
