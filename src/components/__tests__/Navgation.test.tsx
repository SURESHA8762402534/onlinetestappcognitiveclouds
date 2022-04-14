import {screen, render, fireEvent, getByRole} from '@testing-library/react'
import {BrowserRouter, Link} from 'react-router-dom';
import EntryPage from '../EntryPage';
import Nav from '../Nav';
import SignUp from '../SignUp';

test('dummy2',()=>{
    const val = true
    expect(val).toBe(true)
})

test('get snapshot of navbar', ()=>{
    const tree = render(
        <BrowserRouter><Nav></Nav></BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
})

describe('test Signup button', ()=>{
    it('sign Up button test', ()=>{
        render(
            <BrowserRouter><Nav></Nav></BrowserRouter>
        )
        const text = screen.getByText('Sign Up')
        expect(text).toBeInTheDocument()
    });

    test('signup page test',()=>{
        render(
            <BrowserRouter><SignUp/></BrowserRouter>
        )
        expect(screen.getAllByRole('textbox').length).toBe(3)
        expect(screen.getAllByRole('radio').length).toBe(3)
        expect(screen.getByRole('button')).toBeInTheDocument()
    });

    // test('button function',()=>{
    //     const mockfun = jest.fn();
    //     // render(
    //     //     <BrowserRouter><SignUp onClick={mockfun}/></BrowserRouter>
    //     // );
        
    //     fireEvent.click(screen.getByRole('button'));
    //     expect(mockfun).toHaveBeenCalled();
    // })

    test('test for enter page',()=>{
        render(
            <BrowserRouter><EntryPage setLanguage={()=>{}}/></BrowserRouter>
        );
            screen.debug()
    })
})