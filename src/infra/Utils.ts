import { Fn, Stack } from "aws-cdk-lib";



export function getSuffixFromStack(stack: Stack){
    const shotSuffixId = Fn.select(2, Fn.split('/', stack.stackId));
    const suffix = Fn.select(4, Fn.split('-', shotSuffixId));
    return suffix;
}