import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import { RootState, IYDispatch } from '@/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => IYDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const shallowEqualApp = shallowEqual
