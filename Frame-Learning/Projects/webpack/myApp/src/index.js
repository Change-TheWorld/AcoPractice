import './assets/less/index.less';

$('#test-btn').click(function () {
  $.get('/api/test.do', function (res) {
    $('#container').append(`<h4 class="alert alert-info">You get ${JSON.stringify(res.data)}</h4>`);
  });
});
