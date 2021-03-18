public static class Kata
{
  public static int MaxSequence(int[] arr)
  {
    //TODO : create code
    int max_sum = 0;
    int current_sum = 0;
    int n = arr.Length;

    for(int i=0; i<n; i++) {
      current_sum = current_sum + arr[i];
      if (current_sum < 0)
        current_sum = 0;
      if(max_sum < current_sum)
        max_sum = current_sum;
    }
    return max_sum;
  }
}
