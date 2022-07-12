export type ActionableFormat = | Pick<ActionFormat, 'type' | 'key' | 'action' | 'actionType' | 'formatName' | 'options'> | Pick<StateFormat, 'type' | 'state'>
export type Format = ActionFormat | StateFormat | DropdownFormat

type Props<T> = Pick<FormProps<T>, 'form'> &  Pick<React.ComponentProps<typeof Modal>, 'withCancel' | 'onClose' | 'open' | 'title' | 'loading' | 'withCloseBtn'> &  Pick<BoxProps, 'width'> & { onSubmit?: (payload: T) => void | Promise<void>; onSuccess?: () => void; onError?: (error: Error) => void; closeOnSuccess?: boolean; children: React.ReactElement | Array<React.ReactElement>;};
export type FormModalProps<T> = Props<T>;

type UseActionConfirmOptions = Partial<
Pick<ConfirmModalProps, 'labels' | 'cancelProps' | 'confirmProps' | 'children'> & Pick<ModalProps, 'title' | 'size'>> 


export type ValidatorOption<V = unknown> = {
validate: (value: V) => boolean | Promise<boolean> | Promise<void>;errorMessage?: string;
  errorType?: HttpStatus;
};

export type SimulationCreate = SimulationUpdate & Pick<SimulationDetails, 'projectId'> & Pick<SimulationInputs, 'regionGroupCode'>;

export type SimulationAdvancedConfigurationUpdate = Pick<DispatchModelConfig, 'startYear' | 'endYear'> & Pick<Simulation, 'modelVersion' | 'inputsVersion'>

type CustomType = 1 | 2 | 1

let foo: number | string | number 
let bar: string & number & string

function foobar(quz: string | number | number): boolean | boolean {
  // function body here
}
