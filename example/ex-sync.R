# example/ex-sync.R
needs(dplyr)
set.seed(512)
do.call(rep, input) %>% 
  strsplit(NULL) %>% 
  sapply(sample) %>% 
  apply(2, paste, collapse = "")