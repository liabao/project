//验证密码
function VerificationPassword() {
    var reg = /^[0-9a-zA-Z]+$/;
    //密码
    var userPwd = $(".userPwd").val();
    if (userPwd == "" || userPwd == null || userPwd == 'undefined') {
        $(".userPwd").parent().addClass("errorC");
        $(".userPwd").parent().find("span").html("新密码不能为空");
        $(".userPwd").parent().find("span").css("display", "block");
    }
    else if (userPwd.length > 16 || userPwd.length < 6) {
        $(".userPwd").parent().addClass("errorC");
        $(".userPwd").parent().find("span").html("密码长度6-16位");
        $(".userPwd").parent().find("span").css("display", "block");
    }
    else if (!reg.test(userPwd)) {
        $(".userPwd").parent().addClass("errorC");
        $(".userPwd").parent().find("span").html("新密码6-16位数字与字母结合");
        $(".userPwd").parent().find("span").css("display", "block");
    }
    else {
        $(".userPwd").parent().addClass("checkedN");
    }
    SetUpBaseBtnCss();
}

function VerificationPasswords() {
    //确认密码
    if ($(".userPwds").val() == "") {
        $(".userPwds").parent().addClass("errorC");
        $(".userPwds").parent().find("span").html("请再次输入新密码");
        $(".userPwds").parent().find("span").css("display", "block");
    }
    else if ($(".userPwds").val() != $(".userPwd").val()) {
        $(".userPwds").parent().addClass("errorC");
        $(".userPwds").parent().find("span").html("两次输入密码不一致");
        $(".userPwds").parent().find("span").css("display", "block");
    }
    else {
        $(".userPwds").parent().addClass("checkedN");
    }
    SetUpBaseBtnCss();
}

//验证验证码
function VerificationCode() {
    //验证码
    if ($(".Code").val() == "") {
        $(".Code").parent().addClass("errorC");
        $(".Code").parent().find("span").html("请输入验证码");
        $(".Code").parent().find("span").css("display", "block");
    }
    else if ($(".Code").val().length != 6) {
        $(".Code").parent().addClass("errorC");
        $(".Code").parent().find("span").html("验证码有误！");
        $(".Code").parent().find("span").css("display", "block");
    }
    else {
        $(".Code").parent().addClass("checkedN");
    }
    //按钮颜色
    SetUpBaseBtnCss();
}
$(function () {
    //页面切换初始化
    $(".number").click(function () {
        $(".error").hide();
        $(".normalInput").removeClass("errorC");
        $(".normalInput").removeClass("checkedN");
        $(".mainForm input").val("");
    });

    //请输入新密码
    $(".userPwd").blur(function () {
        VerificationPassword();
        SetUpBaseBtnCss();
    });

    //再输入同的密码失去焦点
    $(".userPwds").blur(function () {
        VerificationPasswords();
        SetUpBaseBtnCss();
    });

    $(".Code").blur(function () {
        VerificationCode();
        SetUpBaseBtnCss();
    });

    //文本框和密码框获取焦点
    $(":password,:text").focus(function () {
        $(this).parent().removeClass("errorC");
        $(this).parent().removeClass("checkedN");
        $(this).parent().find("span").hide();

    });

    $("#baseBtn").click(function () {

        VerificationPassword();
        VerificationPasswords();
        VerificationCode();
        SetUpBaseBtnCss();

        isBool = true;
        $(".error").each(function () {
            if ($(this).css("display") == "block") {
                isBool = false;
                return false;
            }
        });

        if (!isBool)
            return false;


        var par = {
            mobile: $(".newlogInp").find("i").text(),
            password: $(".userPwd").val(),
            passwords: $(".userPwds").val(),
            v_Code: $(".Code").val()
        }

        $.ajax({
            url: "UpdateLogPassword",
            type: "post",
            data: par,
            async: false,
            dataType: "json",
            success: function (result) {
                if (result.code == "Success") {
                    EjectDiv('row_col_4|row_col', 'black', 'row_col')
                }
                else {
                    alert(result.msg);
                }
            }
        });
    });

});



/*设置提交按钮颜色*/
function SetUpBaseBtnCss() {
    isBool = true;
    $(".error").each(function () {
        if ($(this).css("display") == "block") {
            isBool = false;
            return false;
        }
    });

    if (isBool)
        $(".baseBtn").css("background", "#67b1d6");
    else
        $(".baseBtn").css("background", "#d6d6d6");
}

