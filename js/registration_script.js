(function() {
    $(function() {
      var verif_confirm, verif_empty;
      verif_empty = function(field) {
        return $('#f_' + field).keyup(function() {
          var $mess, $text;
          $mess = $('#' + field + '-field');
          if ($(this).val() !== '') {
            $(this).add($mess).addClass('valid');
            $text = $mess.text().replace("empty", "correct");
          } else {
            $(this).add($mess).removeClass('valid');
            $text = $mess.text().replace("correct", "empty");
          }
          return $mess.text($text);
        });
      };
      verif_confirm = function(field) {
        return $('#f_' + field).keyup(function() {
          var $mess, $text;
          $mess = $('#' + field + '-field');
          if ($(this).val() === $('#f_password').val()) {
            $(this).add($mess).addClass('valid');
            $text = $mess.text().replace("doesn't match", "is correct");
          } else {
            $(this).add($mess).removeClass('valid');
            $text = $mess.text().replace("is correct", "doesn't match");
          }
          return $mess.text($text);
        });
      };
      verif_empty('first');
      verif_empty('last');
      verif_empty('password');
      return verif_confirm('confirm');
    });
  
  }).call(this);