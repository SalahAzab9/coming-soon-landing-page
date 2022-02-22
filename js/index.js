var countDownDate = new Date();
countDownDate = new Date(countDownDate.getFullYear() + 1 ,countDownDate.getMonth() - 6 ,01);

var x = setInterval(function(){
  // الدالة دي بتكرر الفانكشن اللي جواها كل مدة 1000 مللي ثانية
  // يعني كل 1000 مللي ثانية الدالة دي بتتنفذ
    var now =new Date();
    var diff = countDownDate - now;
    //  لو وقفنا الدالة عند هنا بس وجينا نطبع الفرق ده باستخدام الكونسول حيطبع الفرق بين التاريخين بالمللي ثانية وحيكون رقم كبير جدا
    // بالتالي عايزين نحول الرقم اللي بالملي ثانية ده لأشهر والباقي منه نحوله لايام والباقي ساعات والباقي دقائق وهكذا
    var months = Math.floor(diff/(30 * 24 * 60 * 60 * 1000));
    //  وهنا عدد الشهور اللي موجودة في الرقم اللي طلع بالمللي ثانية ده جبناها عن طريق قسمة الرقم ده علي عدد المللي ثانية اللي موجودة في الشهر الواحد
    // ونستخدم الدالة ماث دوت فلور عشان تديني الرقم من غير فواصل 
    var days = Math.floor((diff%( 1000 * 60 * 60 * 24 * 30))/(1000 * 60 * 60 * 24));
    // وهنا بما ان ناتج القسمة اللي بتاع عدد الشهور كان فيه كسور واحنا شيلناها بالدالة فلور فاحنا عايزين باقي القسمةة ده دلوقتي هنا عشان نطلع منه عدد ايام متبقية
    // وجيبناها عن طريق اننا قسمنا باقي القسمة بتاعت عدد الشهور علي عدد المللي ثانية اللي موجودة في اليوم الواحد وبردو استخدمنا الدالة فلور عشان تشيل الزيادة ده وتخلي الايام عدد صحيح والزيادة دي حنجيب منها بعد كدة عدد الساعات
    // من خلال بردو باقي قسمتها علي عدد المللي ثانية اللي في الساعة الواحدة 
    // وهكذا لحد ما نجيب عدد الثواني المكتبقية من خلال باقي عدد الدقائق المتبقية مقسومة علي عدد المللي ثانية اللي موجودة في الثانية الواحدة
    var hours = Math.floor((diff%(1000 * 60 * 60 *24))/(1000 * 60 * 60));
    var minutes=Math.floor((diff%(1000 * 60 * 60))/(1000 * 60));
    var seconds =Math.floor((diff%(1000 * 60))/1000);

    document.getElementById("months").innerHTML= months;
    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
},1000);
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()