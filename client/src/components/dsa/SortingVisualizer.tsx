import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrayBar } from "./ArrayBar";
import { Play, Pause, RotateCcw, StepForward } from "lucide-react";

interface ArrayElement {
  value: number;
  isComparing: boolean;
  isSorted: boolean;
  isSwapping: boolean;
}

export function SortingVisualizer() {
  const [array, setArray] = useState<ArrayElement[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);

  const generateArray = useCallback((size: number = 15) => {
    const newArray = Array.from({ length: size }, () => ({
      value: Math.floor(Math.random() * 100) + 1,
      isComparing: false,
      isSorted: false,
      isSwapping: false,
    }));
    setArray(newArray);
  }, []);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms / speed));

  const bubbleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);

    const n = array.length;
    const arrayCopy = [...array];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (isPaused) {
          await new Promise((resolve) => {
            const checkPause = setInterval(() => {
              if (!isPaused) {
                clearInterval(checkPause);
                resolve(true);
              }
            }, 100);
          });
        }

        // Highlight comparing elements
        arrayCopy[j].isComparing = true;
        arrayCopy[j + 1].isComparing = true;
        setArray([...arrayCopy]);
        await sleep(500);

        if (arrayCopy[j].value > arrayCopy[j + 1].value) {
          // Highlight swapping elements
          arrayCopy[j].isSwapping = true;
          arrayCopy[j + 1].isSwapping = true;
          setArray([...arrayCopy]);
          await sleep(500);

          // Perform swap
          const temp = arrayCopy[j];
          arrayCopy[j] = arrayCopy[j + 1];
          arrayCopy[j + 1] = temp;
        }

        // Reset comparing and swapping states
        arrayCopy[j].isComparing = false;
        arrayCopy[j + 1].isComparing = false;
        arrayCopy[j].isSwapping = false;
        arrayCopy[j + 1].isSwapping = false;
        setArray([...arrayCopy]);
      }
      // Mark sorted elements
      arrayCopy[n - i - 1].isSorted = true;
    }
    arrayCopy[0].isSorted = true;
    setArray([...arrayCopy]);
    setIsSorting(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bubble Sort Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="h-[300px] flex items-end justify-center gap-1">
            {array.map((element, index) => (
              <ArrayBar
                key={index}
                value={element.value}
                height={(element.value / 100) * 80}
                isComparing={element.isComparing}
                isSorted={element.isSorted}
                isSwapping={element.isSwapping}
              />
            ))}
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                onClick={() => generateArray()}
                disabled={isSorting && !isPaused}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Generate New Array
              </Button>
              <Button
                onClick={() => {
                  if (isSorting) {
                    setIsPaused(!isPaused);
                  } else {
                    bubbleSort();
                  }
                }}
              >
                {isSorting ? (
                  isPaused ? (
                    <Play className="w-4 h-4 mr-2" />
                  ) : (
                    <Pause className="w-4 h-4 mr-2" />
                  )
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isSorting ? (isPaused ? "Resume" : "Pause") : "Start Sorting"}
              </Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Animation Speed</p>
              <Slider
                defaultValue={[1]}
                min={0.5}
                max={2}
                step={0.1}
                onValueChange={([value]) => setSpeed(value)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
