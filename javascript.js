let current = 0;

function switchContent(target) {
  if (current === target) return;

  const currentEl = document.getElementById(`content${current}`);
  const nextEl = document.getElementById(`content${target}`);

  currentEl.classList.remove('active');
  nextEl.classList.add('active');

  current = target;
}
