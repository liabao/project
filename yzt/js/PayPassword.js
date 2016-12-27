//验证密码
function VerificationPassword() {
    var reg = /^[0-9a-zA-Z]+$/;
    //密码
    if ($(".payPwd").val() == "") {
        $(".payPwd").parent().addClass("errorC");
        $(".payPwd").parent().find("span").html("支付密码不能为空");
        $(".payPwd").parent().find("span").css("display", "block");
    }
    else if ($(".payPwd").val().length != 6) {
        $(".payPwd").parent().addClass("errorC");
        $(".payPwd").parent().find("span").html("支付密码长度为6位");
        $(".payPwd").parent().find("span").css("display", "block");
    }
    else if (!reg.test($(".payPwd").val())) {
        $(".payPwd").parent().addClass("errorC");
        $(".payPwd").parent().find("span").html("支付密码6位数字与字母结合");
        $(".payPwd").parent().find("span").css("display", "block");
    }
    else {
        $(".payPwd").parent().addClass("checkedN");
    }
    SetUpBaseBtnCss();
}

function VerificationPasswords() {
    if ($(".payPwds").val() == "") {
        $(".payPwds").parent().addClass("errorC");
        $(".payPwds").parent().find("span").html("请再次输入支付密码");
        $(".payPwds").parent().find("span").css("display", "block");
    }
    else if ($(".payPwds").val() != $(".payPwd").val()) {
        $(".payPwds").parent().addClass("errorC");
        $(".payPwds").parent().find("span").html("两次输入密码不一致");
        $(".payPwds").parent().find("span").css("display", "block");
    }
    else {
        $(".payPwds").parent().addClass("checkedN");
    }
    SetUpBaseBtnCss();
}

//验证验证码
function VerificationCode() {
    //验证码
    if ($(".payCode").val() == "") {
        $(".payCode").parent().addClass("errorC");
        $(".payCode").parent().find("span").html("验证码不能为空");
        $(".payCode").parent().find("span").css("display", "block");
    }
    else if ($(".payCode").val().length != 6) {
        $(".payCode").parent().addClass("errorC");
        $(".payCode").parent().find("span").html("验证码有误！");
        $(".payCode").parent().find("span").css("display", "block");
    }

    else {
        $(".payCode").parent().addClass("checkedN");
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

   
    //文本框和密码框获取焦点
    $(":password,:text").focus(function () {
        $(this).parent().removeClass("errorC");
        $(this).parent().removeClass("checkedN");
        $(this).parent().find("span").hide();

    });

    //支付密码
    //请输入新密码
   
    $(".payPwd").blur(function () {

        VerificationPassword();
    });

    //再输入同的密码失去焦点
    $(".payPwds").blur(function () {
        VerificationPasswords();
    });

    //验证码失去焦点
    $(".payCode").blur(function () {
        
        VerificationCode();

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
            password: $(".oldPassword.payPwd").val(),
            passwords: $(".oldPassword.payPwds").val(),
            v_Code: $(".oldPassword.oldCode.payCode").val()
        }

        $.ajax({
            url: "UpdatePayPassword",
            type: "post",
            data: par,
            async: false,
            dataType: "json",
            success: function (result) {
                if (result.code == "Success") {
                    EjectDiv('row_col_4|row_col', 'black', 'row_col');
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

