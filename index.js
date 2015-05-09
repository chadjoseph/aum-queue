import dispatch from 'aum-dispatch';
import listen from 'aum-listen';

var current = {};

listen('queue', function (e) {
  var detail = e.detail;
  var id = detail.id;

  if (current[id]) {
    delete current[id];

    if (!Object.keys(current).length) {
      dispatch('paint');
    }

    return;
  }

  current[id] = detail.defer;
});

export default function (key) {
  return current[key];
}

