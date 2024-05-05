function main ()
{
window.onload = update_sizeValue(); // display the bars with init value when the page onload
window.onload = speed_manager();
window.onload = update_select_sort();

// Event handling
size.addEventListener('change', () => update_sizeValue());

randomize.addEventListener('click', () => {
    barsHeight = random_generator();
    arrayBars = random_diplay(barsHeight);
});

run.addEventListener('click', () => run_visualizer(arrayBars, barsHeight));

reset.addEventListener('click', () => reset_visualizer());

speed.addEventListener('change', () => speed_manager());

sortSelect.addEventListener('change', () => update_select_sort());

}
main();