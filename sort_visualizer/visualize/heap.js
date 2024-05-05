function swap (arrayBars, barsHeight, i, j)
{
     //Display before the swap 
     bar_stateUpdate(arrayBars[i], barsHeight[i], 'blue'); 
     bar_stateUpdate(arrayBars[j], barsHeight[j], 'blue');

     [barsHeight[i], barsHeight[j]] = [barsHeight[j], barsHeight[i]];  // swap

    // display state after the swaps
     bar_stateUpdate(arrayBars[i], barsHeight[i], "blue");
     bar_stateUpdate(arrayBars[j], barsHeight[j], "blue");

     // reset the color bar to the original color
     bar_stateUpdate(arrayBars[i], barsHeight[i], "linear-gradient(#3c77e6, #00aaff, #0ef)");
     bar_stateUpdate(arrayBars[j], barsHeight[j], "linear-gradient(#3c77e6, #00aaff, #0ef)");
}


function max_heapify (arrayBars, barsHeight, size, index)
{
    let largestIndex = index;
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;

    if (leftChild < size && barsHeight[leftChild] > barsHeight[largestIndex])
    {
        largestIndex = leftChild;
    }
    if (rightChild < size && barsHeight[rightChild] > barsHeight[largestIndex])  
    {
        largestIndex = rightChild;
    }
    //bar_stateUpdate(arrayBars[largestIndex], barsHeight[largestIndex], "#fff");                             // largest  value 

    if (largestIndex !== index)
    {
        swap(arrayBars, barsHeight, largestIndex, index);
        max_heapify (arrayBars, barsHeight, size, largestIndex);
    }
   return;
}

function heap (arrayBars, barsHeight)
{
   // Build maxheap
    for (let i = Math.floor(barsHeight.length / 2) -1; i >= 0; i--)
    {
        max_heapify (arrayBars, barsHeight, barsHeight.length, i);
    }
     
    for (let size = barsHeight.length - 1; size > 0; size--)
    {
       bar_stateUpdate(arrayBars[0], barsHeight[0], "#fff"); // show the largest element at the top before the swap
       bar_stateUpdate(arrayBars[size], barsHeight[size], "#fff"); // show the element to swap with

       bar_stateUpdate(arrayBars[0], barsHeight[0], "linear-gradient(#3c77e6, #00aaff, #0ef)");
       bar_stateUpdate(arrayBars[size], barsHeight[size], "linear-gradient(#3c77e6, #00aaff, #0ef)");

        [barsHeight[0], barsHeight[size]] = [barsHeight[size], barsHeight[0]];
        bar_stateUpdate(arrayBars[size], barsHeight[size], '#FFA500'); // sorted color 

        max_heapify (arrayBars,barsHeight, size, 0);
    }
    bar_stateUpdate(arrayBars[0], barsHeight[0], '#FFA500');
    enable_buttons();
}

/*
- sorted color: orange
- display the swap of the max at the top: #fff
- display the swap of maxheapify : blue (current with maxChild)
- display maxheapify with linear-gradient
- I think, I  need to put a color for maxHeapify
 */