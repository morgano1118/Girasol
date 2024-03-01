document.addEventListener('mousemove', function(e){
    const rama = document.querySelector('.rama');
    const cabeza = document.querySelector('.cabeza');
    const petalos = document.querySelector('.petal');
  
    // Obtener las coordenadas del centro de la rama
    const centerX = rama.offsetLeft + rama.offsetWidth;
    const centerY = rama.offsetTop + rama.offsetHeight;
  
    // Calcular el ángulo entre el centro de la rama y el ratón
    const angle = Math.atan2(e.clientY , e.clientX )-1;
  
    // Rotar la rama hacia la posición del ratón manteniendo la punta inferior fija
    const ramaAngle = Math.atan2(rama.offsetTop - e.clientY, e.clientX - rama.offsetLeft)+1;
    rama.style.transformOrigin = 'bottom';
    rama.style.transform = `rotate(${ramaAngle}rad)`;
  
    // Calcular la posición de la cabeza y los pétalos
    const cabezaDistance = -150; // Distancia de la cabeza al centro de la rama
    const cabezaX = centerX + cabezaDistance * Math.sin(angle);
    const cabezaY = centerY + cabezaDistance * Math.cos(angle);
    cabeza.style.left = (cabezaX - cabeza.offsetWidth / 2) + 'px';
    cabeza.style.top = (cabezaY - cabeza.offsetHeight / 2) + 'px';
  
    const petaloDistance = 40; // Distancia de los pétalos al centro de la cabeza
    petalos.forEach((petalo, index) => {
      const petaloAngle = angle + ((index * 2 * Math.PI) / petalos.length);
      const petaloX = cabezaX + petaloDistance * Math.sin(petaloAngle);
      const petaloY = cabezaY + petaloDistance * Math.cos(petaloAngle);
      petalo.style.left = (petaloX - petalo.offsetWidth / 2) + 'px';
      petalo.style.top = (petaloY - petalo.offsetHeight / 2) + 'px';
    });
});
  