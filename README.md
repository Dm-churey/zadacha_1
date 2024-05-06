# Задача №1
Было реализовано три варианта решения первой задачи. Различия следующие:


## В файле "zadacha_1.js" реализован идеальный вариант входных данных, при котором на вычисления поступают заранее отсортированные массивы по неубыванию. Тогда происходит слияние этих массивов в один и последующая сортировка элементов.


## В файле "zadacha_1_1.js" реализован более гибкий подход к обработке входных данных. Перед слиянием массивов происходит предваритальная пузырьковая сортировка массивов, затем их слияние и последующая сортировка в объединенном массиве. В таком варианте не важно отсортированный ли массив поступает на обработку, так как массивы будут принудильно проходить предварительную сортировку.


## В файле "zadacha_1_2.js" реализован более простой способ решения. С помощью метода indexOf(0) определяется озиция первого нуля, чтобы определить, где в массиве нужно начать вставку элементов. Затем, используя splice, функция вставляет все элементы из nums2 в массив nums1, начиная с найденной позиции. После вставки элементов массив nums1 сортируется с помощью метода sort, который принимает функцию сравнения в качестве аргумента.

 
 
