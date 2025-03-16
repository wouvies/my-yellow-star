$(document).ready(function() {
    $("#messageState").on("change", function() {
        $(".message").removeClass("openNor closeNor");
        var audio = $(".audio-player")[0];
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer openedHer").addClass("openHer");
            $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
            console.log("Opening");
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer openedHer").addClass("closeHer");
            $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
            console.log("Closing");
            // Ensure the audio is paused when the heart is clicked again
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0; // Reset audio to the beginning
            }
        }
    });

    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if ($(".message").hasClass("closeNor")) {
            $(".message").addClass("closed");
        }
        $(".message").removeClass("openNor closeNor").addClass("no-anim");
    });

    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if (!$(".heart").hasClass("closeHer")) {
            $(".heart").addClass("openedHer beating");
        } else {
            $(".heart").addClass("no-anim").removeClass("beating");
        }
        $(".heart").removeClass("openHer closeHer");
    });
});
