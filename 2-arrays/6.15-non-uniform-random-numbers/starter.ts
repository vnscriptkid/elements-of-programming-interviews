// 6.15 GENERATE NONUNIFORM RANDOM NUMBERS
// Suppose you need to write a load test for a server. You have studied the inter-arrival
// time of requests to the server over a period of one year. From this data you have
// computed a histogram of the distribution of the inter-arrival time of requests. In the
// load test you would like to generate requestsfor the server such that the inter-arrival
// times come from the same distribution that was observed in the historical data. The
// following problem formalizes the generation of inter-arrival times.
// You are given n numbers as well as probabilities po,pi,-. ■ which sum up to
// 1. Given a random number generator that produces values in [0,1] uniformly, how
// would you generate one of the n numbers according to the specified probabilities? 

// For example, if the numbers are 3, 5, 7, 11, and the probabilities are 9/18,6/18, 2/18, 1/18,
// thenin1000000 callsto yourprogram, 3 should appear roughly 500000 times, 5 should
// appear roughly 333333 times, 7 should appear roughly 111111 times, and 11 should
// appear roughly 55555 times.

export function nonuniformRandomNumberGeneration(values: number[], probabilities: number[]) {
    return 0;
}
