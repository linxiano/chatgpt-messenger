"use client";
import { useId } from "react";
import Select from "react-select";
import useSWR from "swr";

const fetchModels = async () =>
  fetch("/api/getModels").then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <div>
        <Select
          instanceId={useId()} // fixes hydration error
          className="mt-2"
          options={models?.modelOptions}
          defaultValue={model}
          //   value={model}
          placeholder={model}
          isLoading={isLoading}
          menuPosition={"fixed"}
          onChange={(e) => setModel(e.value)}
          classNames={
            {
              // control: (state) => "!bg-slate-700", // todo - buggy when styling :(
            }
          }
        />
      </div>
    </div>
  );
};

export default ModelSelection;
